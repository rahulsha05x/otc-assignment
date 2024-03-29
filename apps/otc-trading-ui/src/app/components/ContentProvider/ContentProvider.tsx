import { FC, ReactNode } from 'react';
import { ContentContext } from '../../hooks/ContentContext';
import { content } from '../../utils/content';

export const ContentProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <ContentContext.Provider value={content}>{children}</ContentContext.Provider>
);
