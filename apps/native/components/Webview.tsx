import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const WebviewContainer = () => {
  const BASE_URL = 'https://heymax.ai';
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: '#F7F5FF', paddingTop: insets.top }}>
      <WebView
        style={styles.container}
        source={{ uri: BASE_URL }}
        geolocationEnabled // android only
        allowsInlineMediaPlayback // ios only
        allowsBackForwardNavigationGestures // iOS only
        sharedCookiesEnabled // both
        webviewDebuggingEnabled // both
        startInLoadingState
      />
    </View>
  );
};

export default WebviewContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
