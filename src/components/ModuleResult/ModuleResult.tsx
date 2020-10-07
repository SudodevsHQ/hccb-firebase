import React from 'react';
import { LapResult } from '../../interfaces/moduleOneState';

import HeroCard from '../ContentCard/ContentCard';
import resultStyles from '../result/result.module.scss';
import './ModuleResult.scss';

import {
  Page,
  Document,
  PDFDownloadLink,
  View,
  Text,
  PDFViewer,
  StyleSheet,
} from '@react-pdf/renderer';

interface Props {
  data: LapResult[];
}

const ModuleResult: React.FC<Props> = ({ data }: Props) => {
  console.log(data);
  return (
    <div
      className={`${resultStyles.result} p-md-5 p-4 d-flex text-center justify-content-center`}>
      <HeroCard>
        <PDFViewer className="h-100">
          <MyDoc data={data} />
        </PDFViewer>
        <PDFDownloadLink
          document={<MyDoc data={data} />}
          fileName="somename.pdf">
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </HeroCard>
    </div>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
  },
  section: {
    // margin: 5,
    padding: '5 50',
    flexGrow: 1,
    textAlign: 'center',
  },
});

const MyDoc = (props: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Lap Results</Text>
      </View>
      {props.data.map((lapRes) => (
        <View style={styles.section} key={lapRes.lapNumber}>
          <Text>Lap {lapRes.lapNumber}</Text>
          <Text style={{ fontSize: 15 }}> {lapRes.title}</Text>
          <Text style={{ fontSize: 10 }}>
            {' '}
            {lapRes.description && lapRes.description}
          </Text>
          <Text style={{ fontSize: 16 }}>
            {' '}
            {lapRes.qualities && lapRes.qualities}
          </Text>
          <Text style={{ fontSize: 16 }}>
            {' '}
            {lapRes.suggestions && lapRes.suggestions}
          </Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default ModuleResult;
