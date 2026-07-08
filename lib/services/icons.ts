import {
  Activity,
  AlertTriangle,
  AppWindow,
  ArrowLeftRight,
  ClipboardCheck,
  Compass,
  Database,
  Eye,
  FileText,
  FlaskConical,
  ListFilter,
  ListOrdered,
  Map,
  Network,
  Plug,
  Presentation,
  Route,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react"

const ICON_MAP = {
  Activity,
  AlertTriangle,
  AppWindow,
  ArrowLeftRight,
  ClipboardCheck,
  Compass,
  Database,
  Eye,
  FileText,
  FlaskConical,
  ListFilter,
  ListOrdered,
  Map,
  Network,
  Plug,
  Presentation,
  Route,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} as const satisfies Record<string, LucideIcon>

type IconKey = keyof typeof ICON_MAP

/** Resolves a serializable icon key (safe for a future CMS) to its live Lucide component. */
function resolveIcon(key: IconKey): LucideIcon {
  return ICON_MAP[key]
}

export { ICON_MAP, resolveIcon }
export type { IconKey }
