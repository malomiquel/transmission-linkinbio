import Image from "next/image";
import { forwardRef } from "react";

const ThisOrThatContent = forwardRef<HTMLDivElement, Record<string, string>>(
  function ThisOrThatContent({ title, optionA, optionB, emojiA, emojiB }, ref) {
    return (
      <div
        ref={ref}
        className="relative flex flex-col items-center overflow-hidden"
        style={{ width: 1080, height: 1920, background: "var(--color-bg)" }}
      >
        {/* Fond plus lumineux / joyeux */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 6%, rgba(242,246,255,0.22) 0%, transparent 42%),
              radial-gradient(ellipse at 20% 45%, rgba(201,210,227,0.20) 0%, transparent 52%),
              radial-gradient(ellipse at 85% 60%, rgba(58,63,106,0.22) 0%, transparent 55%)
            `,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 55%, transparent 28%, rgba(0,0,0,0.18) 100%)",
          }}
        />

        {/* Légères bandes haut/bas (moins sombres) */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "52%",
            background:
              "linear-gradient(180deg, rgba(201,210,227,0.12) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "48%",
            background:
              "linear-gradient(0deg, rgba(242,246,255,0.10) 0%, transparent 100%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center w-full h-full">
          {/* Header (identique, mais sans le badge This or That) */}
          <div className="flex flex-col items-center pt-24 px-14">
            <div className="flex items-center gap-5 mb-10">
              <div
                className="size-30 rounded-full overflow-hidden"
                style={{
                  border: "2px solid rgba(201,210,227,0.55)",
                  boxShadow: "0 0 60px rgba(201,210,227,0.10)",
                  background: "rgba(27,32,64,0.55)",
                }}
              >
                <Image
                  src="/logo.svg"
                  alt="Transmission"
                  className="w-full h-full object-cover"
                  width={120}
                  height={120}
                />
              </div>
              <p
                className="font-(family-name:--font-inter) text-3xl tracking-wider"
                style={{ color: "rgba(201,210,227,0.75)" }}
              >
                @transmissionprojet
              </p>
            </div>

            {/* SUPPRIMÉ : le badge "This or That" */}

            <h1
              className="font-(family-name:--font-playfair) font-bold leading-tight mt-6 text-center"
              style={{
                fontSize: 70,
                color: "var(--color-cream)",
                textShadow: "0 12px 40px rgba(0,0,0,0.25)",
              }}
            >
              {title}
            </h1>
          </div>

          {/* Corps : même structure, mais les encadrés sont bien centrés */}
          <div className="flex-1 flex flex-col items-center w-full mt-24 px-14 gap-24">
            {/* Option A (encadré identique mais couleurs joyeuses + centrage) */}
            <div
              className="rounded-4xl py-10 flex flex-col items-center"
              style={{
                width: 860, // centrage visuel (moins "full width" si tu veux)
                background:
                  "linear-gradient(160deg, rgba(58,63,106,0.22) 0%, rgba(58,63,106,0.10) 100%)",
                border: "1.5px solid rgba(201,210,227,0.28)",
                boxShadow: "0 0 70px rgba(201,210,227,0.10)",
              }}
            >
              <span className="text-[100px] mb-4">{emojiA}</span>
              <p
                className="font-(family-name:--font-playfair) text-[60px] font-bold text-center"
                style={{ color: "var(--color-cream)" }}
              >
                {optionA}
              </p>
            </div>

            {/* Zone sticker (un peu plus visible) */}
            <div className="w-full rounded-3xl flex flex-col items-center justify-center py-24 -my-2">
              <span className="text-4xl mb-3" style={{ opacity: 0.55 }}>
                📊
              </span>
              <p
                className="font-(family-name:--font-inter) text-[18px] tracking-wide"
                style={{ color: "rgba(152,163,196,0.9)" }}
              >
                Sticker Sondage ici
              </p>
            </div>

            {/* Option B (encadré identique mais plus lumineux) */}
            <div
              className="rounded-4xl py-10 flex flex-col items-center"
              style={{
                width: 860,
                background:
                  "linear-gradient(160deg, rgba(242,246,255,0.18) 0%, rgba(201,210,227,0.08) 100%)",
                border: "1.5px solid rgba(201,210,227,0.28)",
                boxShadow: "0 0 70px rgba(201,210,227,0.10)",
              }}
            >
              <span className="text-[100px] mb-4">{emojiB}</span>
              <p
                className="font-(family-name:--font-playfair) text-[60px] font-bold text-center"
                style={{ color: "var(--color-cream)" }}
              >
                {optionB}
              </p>
            </div>
          </div>
        </div>

        {/* Ornement bas (un peu plus clair) */}
        <div className="absolute bottom-30 flex items-center gap-3">
          <div
            style={{
              width: 48,
              height: 1,
              background: "rgba(201,210,227,0.28)",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              transform: "rotate(45deg)",
              background: "rgba(201,210,227,0.28)",
            }}
          />
          <div
            style={{
              width: 48,
              height: 1,
              background: "rgba(201,210,227,0.28)",
            }}
          />
        </div>
      </div>
    );
  },
);

export default ThisOrThatContent;
