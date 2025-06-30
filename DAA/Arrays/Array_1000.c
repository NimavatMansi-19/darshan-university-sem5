#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#define N 1000
 
void best_case(){
    FILE *f=fopen("Best_Case_1000.txt","w");
    for(int i=1;i<=N;i++){
        fprintf(f,"%d ",i);
    }
    fclose(f);
}
void worst_case(){
    FILE *f=fopen("Worst_Case_1000.txt","w");
    for(int i=N;i>=1;i--){
        fprintf(f,"%d ",i);
    }
    fclose(f);
}
void average_case(){
    int arr[N];
    for(int i=1;i<=N;i++){
        arr[i-1]=i;
    }
    //suffle
    srand(time(NULL));
    for(int i=N-1;i>0;i--){
        int j=rand()%(i+1);
        int temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    FILE *f=fopen("Average_Case_1000.txt","w");
    for(int i=0;i<N;i++){
        fprintf(f,"%d ",arr[i]);
    }
    fclose(f);
}
void main(){
    best_case();
    worst_case();
    average_case();

}