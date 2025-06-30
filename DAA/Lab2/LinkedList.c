#include<stdio.h>
#include<stdlib.h>
struct Node{
    int data;
    struct Node* next;
} *head=NULL;
void Insert(int data){
    struct Node* newnode=(struct Node*)malloc(sizeof(struct Node));
    newnode->data=data;
    newnode->next=NULL;
    if(head==NULL){
        head=newnode;
    }else{
        struct Node* temp=head;
        while(temp->next!=NULL){
            temp=temp->next;
        }
        
        temp->next=newnode;
    }
}
void Delete(){
     struct Node* temp=head;
    struct Node* prev=NULL;
    if(head==NULL){
        printf("No Element in array");
    }

    while(temp->next!=NULL){
        prev=temp;
        temp=temp->next;
    }
    prev->next=NULL;
    free(temp);

}
void display(){
     struct Node* temp1=head;
     while(temp1!=NULL){
        printf("%d,",temp1->data);
        temp1=temp1->next;
     }
}
void main(){
    Insert(3);
    Insert(5);
    Delete();

    display();
}
