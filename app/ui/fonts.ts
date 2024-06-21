import { Inter, Lusitana, Play } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const play = Play({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic', 'greek'],
});
