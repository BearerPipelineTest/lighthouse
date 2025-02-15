/**
 * @license Copyright 2018 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * Recursively (DFS) traverses an object and calls provided function for each field.
 *
 * @param {*} obj
 * @param {function(string, any, Array<string>, any): void} callback
 * @param {Array<string>} path
 */
export default function walkObject(obj, callback, path = []) {
  if (obj === null) {
    return;
  }

  Object.entries(obj).forEach(([fieldName, fieldValue]) => {
    const newPath = Array.from(path);
    newPath.push(fieldName);

    callback(fieldName, fieldValue, newPath, obj);

    if (typeof fieldValue === 'object') {
      walkObject(fieldValue, callback, newPath);
    }
  });
}
