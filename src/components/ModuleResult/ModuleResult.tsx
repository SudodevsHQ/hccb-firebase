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
  feedback: Record<string, string>;
}

const ModuleResult: React.FC<Props> = ({ data, feedback }: Props) => {
  // console.log(data);
  return (
    <div
      className={`${resultStyles.result} p-md-5 p-4 d-flex text-center justify-content-center`}>
      <HeroCard>
        <PDFViewer className="h-100">
          <MyDoc data={data} feedback={feedback} />
        </PDFViewer>
        <PDFDownloadLink
          className="text-secondary mt-1 btn-light p-1"
          document={<MyDoc data={data} feedback={feedback} />}
          fileName="hccb-result.pdf">
          {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
      </HeroCard>
    </div>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    padding: '0 50',
    flexGrow: 1,
    textAlign: 'center',
  },
});

const MyDoc = (props: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={{ fontSize: 18, color: '#7c57f6' }}>
          Maharashtra Goa Zone
        </Text>
        <Text style={{ fontSize: 12, color: '#7c57f6', marginTop: 1 }}>
          Overview of the Assessment
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#fd6f8d',
            marginTop: 1,
            paddingBottom: 5,
            borderBottom: '1 solid grey',
          }}>
          How did you manage as a Sales Head ?
        </Text>
      </View>
      {props.data.map((lapRes) => (
        <View style={styles.section} key={lapRes.lapNumber}>
          <Text>Lap {lapRes.lapNumber}</Text>
          <Text> {lapRes.title}</Text>

          {lapRes.description && (
            <Text style={{ fontSize: 10, color: 'grey' }}>
              {lapRes.description}
            </Text>
          )}
          <View style={{ padding: 5 }}></View>
          {lapRes.qualities &&
            lapRes.qualities.map((quality, i) => (
              <Text key={`${i}`} style={{ fontSize: 14, color: 'green' }}>
                - {quality}
              </Text>
            ))}

          {props.feedback[lapRes.lapNumber] && (
            <Text style={{ fontSize: 12 }}>
              {props.feedback[lapRes.lapNumber]}
            </Text>
          )}

          {lapRes.suggestions &&
            lapRes.suggestions.map((suggestion, i) => (
              <Text key={`${i}`} style={{ fontSize: 14, color: 'green' }}>
                - {suggestion}
              </Text>
            ))}
        </View>
      ))}
    </Page>
  </Document>
);

export default ModuleResult;
