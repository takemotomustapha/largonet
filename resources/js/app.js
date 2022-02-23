require("./bootstrap");

import Alpine from "alpinejs";
import morph from "@alpinejs/morph";
import collapse from "@alpinejs/collapse";
import focus from "@alpinejs/focus";
import persist from "@alpinejs/persist";
import intersect from "@alpinejs/intersect";

window.Alpine = Alpine;
Alpine.plugin(morph);
Alpine.plugin(collapse);
Alpine.plugin(focus);
Alpine.plugin(persist);
Alpine.plugin(intersect);
Alpine.start();
