/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import isDonor from "@components/VencordSettings/VencordTab";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

import { settings } from "./settings";

export default definePlugin({
    name: "Discord mod menu",
    description: "Discord & vencord stuff you might like :3",
    authors: [{ name: "ItsJulian08", id: 740165682142117928n }],
    settings,
    async start() {
        if (settings.store.fakeDonator) {
            const mod = await findByProps("isDonor");

            before("isDonor", mod, (args) => {
                console.log("Faking donor status for:", args[0]);
                return true; // Will override original return value
            });
        }
    }
});
