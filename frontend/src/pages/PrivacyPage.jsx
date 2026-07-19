import { site } from '../lib/siteConfig.js'

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-display text-4xl sm:text-5xl mb-8">Privacy</h1>
      <div className="space-y-5 text-ink/70 leading-relaxed">
        <p>This site may use Umami, a privacy-friendly analytics tool, to count visits in aggregate. Umami does not use cookies, does not collect personal data, and does not track you across websites.</p>
        <p>This site does not use advertising or tracking cookies.</p>
        <p>If you contact us through the booking form, the details you enter (name, phone, email if provided, and your message) are sent to us by email so we can reply to your inquiry. They are used only for that purpose and are not shared with anyone else. Form delivery is handled by FormSubmit (formsubmit.co), which processes the submission solely to deliver it to us.</p>
        <p>Pages on this site embed Google Maps to show our location and the areas we cover. When a map loads, Google may set cookies and process technical data (such as your IP address) under its own privacy policy.</p>
        <p>Inquiries are kept only as long as needed to answer them and handle your booking, and can be deleted on request.</p>
        <p>If you would like an inquiry you sent us to be deleted, contact us at <a href={'mailto:' + site.email} className="text-sea font-semibold hover:underline">{site.email}</a>.</p>
        <p className="text-sm text-ink/50 pt-4">{site.impressum.company} · OIB: {site.impressum.oib} · {site.impressum.address}</p>
      </div>
    </div>
  )
}