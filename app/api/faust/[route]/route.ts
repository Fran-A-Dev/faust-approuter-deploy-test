import { faustRouteHandler } from "@faustwp/experimental-app-router";
import "@/faust.config.js";

const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/api/faust/token`;
const { GET, POST } = faustRouteHandler;

export { GET, POST };
