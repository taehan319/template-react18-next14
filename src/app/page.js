import { Button, Typography, Container, Box, Grid, Paper } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        React 18 & Next.js 14 テンプレート
      </Typography>
      
      <Typography variant="h6" gutterBottom align="center" color="text.secondary" sx={{ mb: 6 }}>
        Material UIとTailwind CSSを使用したスタータープロジェクト
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              React 18
            </Typography>
            <Typography>
              最新のReactライブラリを使用した高速なUI開発
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="primary">
                詳細を見る
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Next.js 14
            </Typography>
            <Typography>
              App Routerとサーバーコンポーネントを活用
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="secondary">
                詳細を見る
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              MUI & Tailwind
            </Typography>
            <Typography>
              美しいUIコンポーネントとユーティリティクラス
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="outlined" color="primary">
                詳細を見る
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}