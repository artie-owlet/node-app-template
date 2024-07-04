// @ts-check

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
        ...tseslint.configs.disableTypeChecked,
    },
    {
        ignores: [
            '.pnp.cjs',
            '.pnp.loader.mjs',
        ],
    },
    {
        files: ['eslint.config.mjs'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig-base.json',
            },
        },
    },
    {
        rules: {
            '@typescript-eslint/no-confusing-void-expression': [
                'error',
                {
                    ignoreArrowShorthand: true,
                },
            ],
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/restrict-template-expressions': [
                'error',
                {
                    allowBoolean: true,
                    allowNumber: true,
                },
            ],
            'no-console': 'error',
        },
    },
    stylistic.configs['all-flat'],
    {
        rules: {
            '@stylistic/array-bracket-newline': [
                'error',
                'consistent',
            ],
            '@stylistic/array-element-newline': [
                'error',
                {
                    consistent: true,
                    multiline: true,
                },
            ],
            '@stylistic/comma-dangle': ['error', 'always-multiline'],
            '@stylistic/function-call-argument-newline': ['error', 'consistent'],
            '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
            '@stylistic/indent-binary-ops': ['error', 4],
            '@stylistic/lines-between-class-members': [
                'error',
                {
                    enforce: [
                        { blankLine: 'always', prev: '*', next: 'method' },
                        { blankLine: 'always', prev: 'method', next: '*' },
                    ],
                },
            ],
            '@stylistic/max-len': [
                'error',
                {
                    code: 120,
                },
            ],
            '@stylistic/multiline-comment-style': 'off',
            '@stylistic/multiline-ternary': ['error', 'always-multiline'],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/object-property-newline': [
                'error',
                {
                    allowAllPropertiesOnSameLine: true,
                },
            ],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/quote-props': ['error', 'as-needed'],
            '@stylistic/padded-blocks': ['error', 'never'],
            '@stylistic/space-before-function-paren': ['error', 'never'],
        },
    },
);
