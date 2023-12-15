import OpenAI from 'openai';
import { openai_api } from './constants';

export const openai = new OpenAI({
  apiKey: openai_api, 
  dangerouslyAllowBrowser: true
});



