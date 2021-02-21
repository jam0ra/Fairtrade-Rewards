from django.shortcuts import render

def donate(request):
    return render(request, 'donate.html', {})

def map(request):
    return render(request, 'map.html', {})

def points(request):
    return render(request, 'points.html', {})

