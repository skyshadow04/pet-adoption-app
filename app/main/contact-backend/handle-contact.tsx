'use server';
import { neon } from '@neondatabase/serverless';

export async function handleContact(formData: FormData) {
  const sql = neon(process.env.DATABASE_URL!);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
 try {
    await sql
    `
      INSERT INTO contact_submissions (contact_user_name, contact_user_email, contact_user_comment) 
      VALUES (${name}, ${email}, ${message})
    `;
      return { ok: true };
    } catch (e) {
      return { ok: false };
    }
}