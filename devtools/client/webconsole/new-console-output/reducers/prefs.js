/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

const Immutable = require("devtools/client/shared/vendor/immutable");
const PrefState = Immutable.Record({
  logLimit: 1000
});

function prefs(state = new PrefState(), action) {
  return state;
}

exports.PrefState = PrefState;
exports.prefs = prefs;
