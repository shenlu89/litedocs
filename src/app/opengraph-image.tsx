import { ImageResponse } from "next/og";
import Package from "../../package.json";
import { loadGoogleFont } from "../lib/fonts";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "LiteDocs";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  const [outfitExtraBold, outfitBold, outfitRegular] = await Promise.all([
    loadGoogleFont("Outfit", 800),
    loadGoogleFont("Outfit", 700),
    loadGoogleFont("Outfit", 400),
  ]);

  return new ImageResponse(
    <div tw="flex w-full h-full p-12 bg-slate-50 flex-col justify-center">
      <div tw="flex flex-col items-start">
        <div tw="flex items-center space-x-4 mb-4">
          <span
            tw="text-7xl mr-4 font-extrabold tracking-tight text-slate-900"
            style={{ fontFamily: '"Outfit"' }}
          >
            LiteDocs
          </span>
          <div tw="flex items-center justify-center px-4 py-2 rounded-full bg-slate-200">
            <span
              tw="text-2xl text-slate-700"
              style={{ fontFamily: '"Outfit"' }}
            >{`v${Package.version}`}</span>
          </div>
        </div>
        <div
          tw="text-4xl tracking-tight text-slate-700 mb-10 font-bold max-w-4xl"
          style={{ lineHeight: 1.3, fontFamily: '"Outfit"' }}
        >
          Built with Tailwind CSS, MDX, Content Collections, and Next.js.
        </div>
        <ul tw="flex flex-col space-y-4">
          <li
            tw="text-3xl text-slate-600 flex items-center"
            style={{ fontFamily: '"Outfit"' }}
          >
            <span tw="text-green-600 mr-4">✅</span>
            Easy to use and customize
          </li>
          <li
            tw="text-3xl text-slate-600 flex items-center"
            style={{ fontFamily: '"Outfit"' }}
          >
            <span tw="text-green-600 mr-4">✅</span>
            Powered by Content Collections
          </li>
          <li
            tw="text-3xl text-slate-600 flex items-center"
            style={{ fontFamily: '"Outfit"' }}
          >
            <span tw="text-green-600 mr-4">✅</span>
            Beautiful UI with Tailwind CSS
          </li>
          <li
            tw="text-3xl text-slate-600 flex items-center"
            style={{ fontFamily: '"Outfit"' }}
          >
            <span tw="text-green-600 mr-4">✅</span>
            MDX Support for flexible content
          </li>
        </ul>
      </div>
      <div
        tw="absolute bottom-12 right-12 text-4xl text-slate-500 font-medium"
        style={{ fontFamily: '"Outfit"' }}
      >
        https://litedocs.dev
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Outfit",
          data: outfitExtraBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "Outfit",
          data: outfitBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "Outfit",
          data: outfitRegular,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}
