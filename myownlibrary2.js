function bounceOff()
{  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
  && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2)
  {
    
    movingrect.velocityX = movingrect.velocityX * (-1);
    fixedrect.velocityX = fixedrect.velocityX * (-1);
  }  
  if(movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2
    && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2)
  {
    movingrect.velocityY = movingrect.velocityY * (-1);
    fixedrect.velocityY = fixedrect.velocityY * (-1);
  }
}