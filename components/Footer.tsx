import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950 px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold">DIGISPECT</h3>
          <p className="mt-2 text-sm text-slate-400">Premium social media growth systems for creators and brands.</p>
        </div>
        <div>
          <h4 className="font-semibold">Pages</h4>
          <ul className="mt-2 space-y-2 text-slate-400">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Social</h4>
          <ul className="mt-2 space-y-2 text-slate-400">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-slate-400">hello@digispect.com</p>
          <a href="https://calendly.com/YOUR_LINK" className="mt-4 inline-block text-brandBlue">Schedule Your Call</a>
        </div>
      </div>
    </footer>
  );
}
