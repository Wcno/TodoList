from rest_framework import serializers
from .models import Task  # Import the Task model from the tasks app

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task # Assuming the Task model is in the tasks app
        fields = '__all__'  # Serialize all fields of the Task model