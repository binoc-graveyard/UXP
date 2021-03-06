/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "nsArrayUtils.h"

//
// do_QueryElementAt helper stuff
//
nsresult
nsQueryArrayElementAt::operator()(const nsIID& aIID, void** aResult) const
{
  nsresult status = mArray ? mArray->QueryElementAt(mIndex, aIID, aResult) :
                             NS_ERROR_NULL_POINTER;

  if (mErrorPtr) {
    *mErrorPtr = status;
  }

  return status;
}
