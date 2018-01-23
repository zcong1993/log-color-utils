import { Chalk } from 'chalk'

declare namespace ColorUtils {
  const chalk: Chalk
  function success(...strs:string[]): string
  function info(...strs:string[]): string
  function warning(...strs:string[]): string
  function error(...strs:string[]): string
  function bgSuccess(...strs:string[]): string
  function bgInfo(...strs:string[]): string
  function bgWarning(...strs:string[]): string
  function bgError(...strs:string[]): string
  function logPad(fn: (...strs:string[]) => string, ...strs:string[]): void
}

export = ColorUtils
