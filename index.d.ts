import { Chalk } from 'chalk'

declare namespace ColorUtils {
  declare const chalk: Chalk
  declare function success(...strs:string): void
  declare function info(...strs:string): void
  declare function warning(...strs:string): void
  declare function error(...strs:string): void
  declare function logPad(fn: (...strs:string) => void, ...strs:string): void
}

export = ColorUtils
