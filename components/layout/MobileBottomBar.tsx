import { PhoneLink } from "@/components/ui/PhoneLink";

export function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-t border-rule">
      <div className="flex">
        <PhoneLink
          className="flex-1 py-3.5 flex items-center justify-center gap-2 text-sm font-body font-medium text-ink border-r border-rule hover:bg-base-warm transition-colors"
          showIcon
        >
          Call Now
        </PhoneLink>
        <a
          href="#contact-form"
          className="flex-1 py-3.5 flex items-center justify-center gap-2 text-sm font-body font-medium bg-ink text-white hover:bg-ink/90 transition-colors"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
}
