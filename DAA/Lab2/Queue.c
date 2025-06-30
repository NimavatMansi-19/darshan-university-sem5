#include<stdio.h>
#define SIZE 100
int arr[SIZE];
int rare=-1;
int front=-1;
void Enqueue(int data){
    rare=rare+1;
    arr[rare]=data;
    if(front==-1){
        front++;
    }
}
void Dequeue(){
    int a=arr[front];
    front=front+1;
    if(front==0){
        front=-1;
    }
    printf("Element deleted is %d",a);
    printf("\n");
}
void display(){
    for(int i=front;i<=rare;i++){
        printf("%d,",arr[i]);
    }
}
void main(){
    Enqueue(4);
    Enqueue(5);
     Enqueue(6);
      Enqueue(8);
    Dequeue();
    display();
}