# TypeScriptのDIとTsyringeについて の写経
https://zenn.dev/chida/articles/1f7df8f2beb6b6

## プロジェクト作成
https://typescript-jp.gitbook.io/deep-dive/nodejs
```
npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev
npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs

npm install ts-node --save-dev
npm install nodemon --save-dev
```

package.jsonの調整
```
  "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec \"ts-node\" src/index.ts"
  },
```

## デコレーターの利用準備
tsconfig.json の調整
```
{
  'compilerOptions': {
    'target': 'ES5',
    'experimentalDecorators': true
  }
}
```

## tsyringeとreflect-metadataをインストール
```
npm install --save tsyringe
npm install --save reflect-metadata
```

tsconfig.json の調整
```
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```


