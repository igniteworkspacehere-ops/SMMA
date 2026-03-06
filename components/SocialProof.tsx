import { FaYoutube, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

export default function SocialProof() {
  const logos = [FaYoutube, FaInstagram, FaTiktok, FaLinkedin];

  return (
    <section className="border-y border-white/5 bg-slate-900/70 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-slate-300">Trusted by creators on</p>
        <div className="flex flex-wrap items-center gap-10 text-3xl text-slate-200">
          {logos.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
