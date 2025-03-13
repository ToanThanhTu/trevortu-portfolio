/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/no-extraneous-dependencies */

import {dirname} from 'path'
import {fileURLToPath} from 'url'
import {FlatCompat} from '@eslint/eslintrc'
import EslintJS from '@eslint/js'
import TanstackPluginQuery from '@tanstack/eslint-plugin-query'

const fileName = fileURLToPath(import.meta.url)
const currentDirname = dirname(fileName)

const compat = new FlatCompat({
  baseDirectory: currentDirname,
  recommendedConfig: EslintJS.configs.recommended,
})

const eslintConfig = [
  ...compat.extends(
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ),
  ...compat.plugins('@typescript-eslint', 'simple-import-sort', 'unused-imports'),
  ...compat.config({
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
    },
    root: true,
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'no-console': 'warn',
      'react/jsx-filename-extension': [1, {extensions: ['.tsx']}],
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
    },
  }),
  ...TanstackPluginQuery.configs['flat/recommended'],
]

export default eslintConfig
