import { createFileRoute } from "@tanstack/react-router";

import aws from "@/assets/certs/aws_data_engineering_internship.pdf.asset.json";
import google from "@/assets/certs/google_ai_ml_internship.pdf.asset.json";
import fsjava from "@/assets/certs/full_stack_java_internship.pdf.asset.json";
import rwd from "@/assets/certs/responsive_webdesign.pdf.asset.json";
import js from "@/assets/certs/javascript_essentials.pdf.asset.json";
import java from "@/assets/certs/basics_of_java.pdf.asset.json";

const MAP: Record<string, { url: string; filename: string }> = {
  "aws-data-engineering": { url: aws.url, filename: "aws_data_engineering_internship.pdf" },
  "google-ai-ml": { url: google.url, filename: "google_ai_ml_internship.pdf" },
  "full-stack-java": { url: fsjava.url, filename: "full_stack_java_internship.pdf" },
  "responsive-web-design": { url: rwd.url, filename: "responsive_webdesign.pdf" },
  "javascript-essentials": { url: js.url, filename: "javascript_essentials.pdf" },
  "basics-of-java": { url: java.url, filename: "basics_of_java.pdf" },
};

export const Route = createFileRoute("/api/docs/$name")({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const entry = MAP[params.name.replace(/\.pdf$/, "")];
        if (!entry) return new Response("Not found", { status: 404 });
        const origin = new URL(request.url).origin;
        const upstream = await fetch(origin + entry.url);
        if (!upstream.ok || !upstream.body) {
          return new Response("Upstream error", { status: 502 });
        }
        return new Response(upstream.body, {
          status: 200,
          headers: {
            "content-type": "application/pdf",
            "content-disposition": `inline; filename="${entry.filename}"`,
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
