#include<stdio.h>
#define SIZE 100
int arr[SIZE];
int top=-1;
 void Push(int data){
    top=top+1;
    arr[top]=data;
 }
 void Pop(){
    int a=arr[top];
    top--;
    printf("Delete item is %d",a);
    printf("\n");
 }
 void Peep(int index){
    int b=arr[top-index+1];
    printf(" Peeped elemet is %d",b);
    printf("\n");
 }
 void Change(int index,int data){
    arr[top-index+1]=data;
    printf("element changed...");
 }
 void display(){
    
    for(int i=top;i>=0;i--){
        printf("%d,",arr[i]);
    }
 }
 void main(){
    Push(3);//0
    Push(5);
    Push(2);
    Push(4);//3
    Peep(1);
    Change(1,6);
    // Pop();
     display();
   
 }