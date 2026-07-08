import {
  ArrowLeftRight,
  ClipboardCheck,
  Compass,
  Database,
  FlaskConical,
  ListFilter,
  ListOrdered,
  Map,
  Presentation,
  Route,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react"

const ICON_MAP = {
  ArrowLeftRight,
  ClipboardCheck,
  Compass,
  Database,
  FlaskConical,
  ListFilter,
  ListOrdered,
  Map,
  Presentation,
  Route,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} as const satisfies Record<string, LucideIcon>

type IconKey = keyof typeof ICON_MAP

/** Resolves a serializable icon key (safe for a future CMS) to its live Lucide component. */
function resolveIcon(key: IconKey): LucideIcon {
  return ICON_MAP[key]
}

export { ICON_MAP, resolveIcon }
export type { IconKey }
