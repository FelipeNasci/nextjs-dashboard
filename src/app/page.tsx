import Content from "@/app/content";

interface Props {
  searchParams: { search: string };
}

export default function App({ searchParams }: Props) {
  const { search } = searchParams;

  /* @ts-expect-error Server Component */
  return <Content filter={search} />;
}
