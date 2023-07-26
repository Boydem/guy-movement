import { NextRequest, NextResponse } from 'next/server';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest){
    const body = await req.json()
    const {email, name, message} = body
    const res = await resend.sendEmail({
        to: 'noyemdahan@gmail.com',
        from: 'onboarding@resend.dev',
        subject: 'מישהו השאיר לך פרטים באתר Movement-Guy.com',
        html: `<p>פניה חדשה</p>
        <p>שם:${name}</p>
        <p>אימייל:${email}</p>
        <pre>הודעה:${message}</pre>
        ` 
    })
    console.log(res)
    return NextResponse.json({hello:'hello'})
}