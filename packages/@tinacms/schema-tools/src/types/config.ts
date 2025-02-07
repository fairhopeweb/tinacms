/**
Copyright 2021 Forestry.io Holdings, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// TODO: ClintID, Branch, Token should not be optional
export interface TinaCloudSchemaConfig<Store = any> {
  client?: {
    referenceDepth?: number
  }
  build?: {
    publicFolder: string
    outputFolder: string
  }
  /**
   * The base branch to pull content from. Note that this is ignored for local development
   */
  branch?: string
  /**
   * Your clientId from  app.tina.io
   */
  clientId?: string
  /**
   * Your read only token from app.tina.io
   */
  token?: string
  media?: {
    loadCustomStore?: () => Promise<Store>
    tina?: {
      publicFolder: string
      mediaRoot: string
    }
  }

  /**
   * Used to override the default Tina Cloud API URL
   */
  tinaioConfig?: {
    assetsApiUrlOverride?: string // https://assets.tinajs.io
    frontendUrlOverride?: string // https://app.tina.io
    identityApiUrlOverride?: string // https://identity.tinajs.io
    contentApiUrlOverride?: string // https://content.tinajs.io
  }
}
