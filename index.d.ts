import { Chalk } from 'chalk'

declare namespace ColorUtils {
  const chalk: Chalk
  function success(...strs:string[]): void
  function info(...strs:string[]): void
  function warning(...strs:string[]): void
  function error(...strs:string[]): void
  function bgSuccess(...strs:string[]): void
  function bgInfo(...strs:string[]): void
  function bgWarning(...strs:string[]): void
  function bgError(...strs:string[]): void
  function logPad(fn: (...strs:string[]) => void, ...strs:string[]): void
}

export = ColorUtils
