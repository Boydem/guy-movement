import { mailOptions, transporter } from "@/emails/nodemailer"
import { NextRequest, NextResponse } from "next/server"

// Using nodemailer
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, name, message } = body
    await transporter.sendMail({
      ...mailOptions,
      subject: "מישהו השאיר לך פרטים באתר Movement-Guy.com",
      html: `<p>פניה חדשה</p>
        <p>שם:${name}</p>
        <p>אימייל:${email}</p>
        <pre>הודעה:${message}</pre>
        `,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
