/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    fakeDonator: {
        type: OptionType.BOOLEAN,
        description: "Make vencord think you're a donator",
        default: false,
        restartNeeded: true,
    },
    fakeDev: {
        type: OptionType.BOOLEAN,
        description: "Make vencord think you're a developer",
        default: false,
        restartNeeded: true,
    }
});
