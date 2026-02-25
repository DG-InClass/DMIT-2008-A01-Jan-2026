// ~/components/AdaptationReviewCard.js
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function AdapatationReviewCard(props) {
    return <>
    <Card key={props.index}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                    {props.rating}
                  </Avatar>
                }
                
                title={
                  <Typography variant="body2" color="text.secondary">
                    {props.title}
                  </Typography>
                }
                
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {props.comment}
                </Typography>
              </CardContent>
            </Card>
    </>
}