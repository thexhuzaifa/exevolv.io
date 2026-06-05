import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'srv2186.hstgr.io', 
  user: process.env.DB_USER || 'u659748479_np',
  password: process.env.DB_PASSWORD || 'Business+123!!',
  database: process.env.DB_NAME || 'u659748479_np' 
};

export async function POST(req: Request) {
  let connection;
  try {
    const { ip } = await req.json();

    if (!ip) {
      return NextResponse.json({ error: 'IP address is required' }, { status: 400 });
    }

    connection = await mysql.createConnection(dbConfig);

    // Check if IP exists
    const [rows]: any = await connection.execute('SELECT * FROM proxy_ips WHERE ip_address = ?', [ip]);

    if (rows.length > 0) {
      return NextResponse.json({ error: 'already existed' }, { status: 409 });
    }

    // Insert new IP
    await connection.execute('INSERT INTO proxy_ips (ip_address) VALUES (?)', [ip]);

    return NextResponse.json({ message: 'IP saved successfully' }, { status: 201 });
  } catch (error: any) {
    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ error: 'already existed' }, { status: 409 });
    }
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
