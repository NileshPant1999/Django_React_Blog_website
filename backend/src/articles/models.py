from django.db import models

# Create your models here.
SEMESTER_CHOICES = ( 
    ("1", 1), 
    ("2", 2), 
    ("3", 3), 
    ("4", 4), 
    ("5", 5),
)

class Article(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField(default="This is a blog by Nilesh Pant")
    content = models.TextField()
    star = models.IntegerField(choices= SEMESTER_CHOICES, default=2)
    likes = models.IntegerField(default=100)
    avatar = models.ImageField(default='default.jpg')

    def __str__(self):
        return self.title