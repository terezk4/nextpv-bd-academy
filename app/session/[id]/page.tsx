import { SessionPageClient } from '@/components/SessionPageClient';

export function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6].map(id => ({ id: String(id) }));
}

type Props = { params: Promise<{ id: string }> };

export default async function SessionPage({ params }: Props) {
  const { id } = await params;
  return <SessionPageClient sessionId={parseInt(id)} />;
}
