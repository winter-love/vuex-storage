import {CookieSerializeOptions} from 'cookie'
import {Request, Response} from 'express'
import {Store} from 'vuex'

export interface IFilterOptions {
  except?: string[]
  only?: string[]
  // cookie filter option only
  options?: CookieSerializeOptions
}

export interface IFilters {
  /**
   * Cookie storage filter option
   */
  cookie?: IFilterOptions
  /**
   * Session storage filter option
   */
  session?: IFilterOptions
  /**
   * Local storage filter option
   */
  local?: IFilterOptions
}

// export type DynamicFilterFn<S> = (store: Store<S>, options: IVuexStorageOptions<S>) => IFilters

export interface IDynamicFilterObj {
  /**
   * Cookie storage filter option state name
   */
  cookie?: string

  /**
   * Session storage filter option state name
   */
  session?: string

  /**
   * Local storage filter option state name
   */
  local?: string
}

export interface IVuexStorageOptions<S> {

  filterSaveMethod?: 'cookie' | 'localStorage'
  filterSaveKey?: string

  /**
   * Override cookie, session and local by state
   */
  filter?: IDynamicFilterObj

  /**
   * Restore data from client storage
   */
  restore?: boolean

  /**
   * Supporting vuex strict
   */
  strict?: boolean

  /**
   * Override storage data to state
   * @default false
   */
  storageFirst?: boolean

  key?: string

  mutationName?: string

  clientSide?: ((store: Store<S>, options: IVuexStorageOptions<S>) => boolean) | boolean

  /**
   * @deprecated
   */
  isRun?: boolean

  /**
   * @deprecated
   * please use restore
   */
  isRestore?: boolean

  /**
   * @deprecated
   * please use strict
   */
  isStrictMode?: boolean

  /**
   * @deprecated
   * please use filter
   */
  local?: any

  /**
   * @deprecated
   * please use filter
   */
  session?: any

  /**
   * @deprecated
   * please use filter
   */
  cookie?: any
}

export interface INuxtContext {
  req: Request,
  res: Response,
}
