import {
  Activity,
  Apple,
  Armchair,
  BookOpen,
  Brain,
  Music,
  Palette,
  Smile,
  Stethoscope,
  TreePine,
  Hospital,
  MapPin,
  Home,
  HeartPulse,
  Bath,
  BedDouble,
  Building,
  Calendar,
  CheckCircle2,
  ClipboardList,
  Heart,
  Maximize,
  MessageCircle,
  Phone,
  Users,
  Utensils,
  type LucideIcon,
} from 'lucide-react'

/**
 * Nomes de icone que o cliente escolhe no Studio.
 *
 * O Studio guarda so o nome ("coracao"); a traducao para o desenho acontece
 * aqui. Um nome desconhecido cai no icone que o bloco ja usava.
 */
export const ICONES: Record<string, LucideIcon> = {
  prancheta: ClipboardList,
  pessoas: Users,
  coracao: Heart,
  conversa: MessageCircle,
  check: CheckCircle2,
  predio: Building,
  expandir: Maximize,
  banheiro: Bath,
  poltrona: Armchair,
  talheres: Utensils,
  cama: BedDouble,
  telefone: Phone,
  whatsapp: MessageCircle,
  calendario: Calendar,
  casa: Home,
  batimento: HeartPulse,
  musica: Music,
  paleta: Palette,
  livro: BookOpen,
  sorriso: Smile,
  estetoscopio: Stethoscope,
  atividade: Activity,
  maca: Apple,
  cerebro: Brain,
  arvore: TreePine,
  hospital: Hospital,
  mapa: MapPin,
}

export function icone(nome: string | undefined, padrao: LucideIcon): LucideIcon {
  return (nome && ICONES[nome]) || padrao
}
