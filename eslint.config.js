import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default [
    ...tseslint.configs.recommended,
    { ignores: ['dist'] },
    {
        files: ['src/**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        settings: { react: { version: '19.1' } },
        rules: {
            ...js.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'no-unused-vars': 0,
            'react/prop-types': 0,
            'prettier/prettier': ['error'],
        },
    },
    eslintPluginPrettierRecommended,
];
