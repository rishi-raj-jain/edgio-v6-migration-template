// File: edgio-v6-migration-template/routes.ts

import { Router } from "@edgio/core/router";

export default new Router().fallback(({ proxy }) => proxy("origin"));
