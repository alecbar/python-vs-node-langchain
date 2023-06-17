import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import {
  RecursiveCharacterTextSplitter,
} from "langchain/text_splitter";

const loader = new PDFLoader("2305.12517.pdf");

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 0,
});

let docs = await loader.loadAndSplit(splitter);

docs = await splitter.splitDocuments(docs);
