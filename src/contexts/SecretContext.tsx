// src/contexts/SecretContext.tsx
import { createContext, useContext } from 'react';

// 1. データの型を定義
type SecretContextType = {
  isSecretMode: boolean;
};

// 2. 空っぽのコンテキストを作成
const SecretContext = createContext<SecretContextType>({ isSecretMode: false });

// 3. 誰でも使えるようにするカスタムフック（受信機）
export const useSecret = () => useContext(SecretContext);

// 4. コンテキストのプロバイダー（放送局）
export const SecretProvider = SecretContext.Provider;