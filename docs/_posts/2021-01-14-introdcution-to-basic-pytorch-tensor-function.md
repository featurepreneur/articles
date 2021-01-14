---
title: Introduction to basic PyTorch tensor functions
date: 2021-01-14
tags: 
  - PyTorch
  - Deep Learning
  - Machine Learning
author: FPR
featuredimg: 'https://miro.medium.com/max/2000/1*oLcN6Vlpa-PrxnRYJGnXDQ.png'
summary: Basics of PyTorch tensors
---

This article is a part of “Deep Learning with Pytorch : Zero to GANs” course, provided by Jovian ML & freeCodeCamp and in its first week of the course, covered the basic PyTorch tensors & linear regression in PyTorch. Objective of this article is to talk about some of the basic tensor operations.

**Introduction**
PyTorch is an open source deep learning framework, developed by Facebook’s AI research lab. Tensors are fundamental data structures in PyTorch. Tensor is a data collector and in general it is an array of n- dimensional. For example: Scalar is a 0-D tensor, Vector is a 1-D tensor, Matrices are 2-D tensors and so on. PyTorch tensors are similar to Numpy arrays but with a difference that PyTorch tensors can be instantiated on GPUs for parallel computing.

Let’s get started

**Function 1 : Torch.Tensor**
torch.tensor(data, dtype=None, device=None, requires_grad=False, pin_memory=False) → Tensor
This function converts input data to a tensor and the input data can be a list, tuple, NumPy array, scalar, and other types.

```
#Example 1 - working
tensor_1 = torch.tensor([1,2,3,4])
tensor_1
```

This example shows that a list has been converted to a tensor by using torch.tensor() function . The dimension of the tensor can be extracted by using dim() function and the shape of the tensor can be inspected by using .shape() function, which outputs the length of the tensor along each dimension

```
#Example 1 - working
tensor_1 = torch.tensor([1,2,3,4])
tensor_1
```

This example shows that a list has been converted to a tensor by using torch.tensor() function . The dimension of the tensor can be extracted by using dim() function and the shape of the tensor can be inspected by using .shape() function, which outputs the length of the tensor along each dimension

```
print("Dimension of tensor : ",tensor_1.dim())
print("Shape of the tensor : ",tensor_1.shape)
```

It shows that, the output tensor is an one dimensional and of size 4.

Creating tensor from a nested list

```
#Example 2 - working
tensor_2 = torch.tensor([[1,2,3],[7,8,10],[11,20,30]], dtype = torch.float32)
print(tensor_2)

print("Dimension of tensor : ",tensor_2.dim())
print("Shape of the tensor : ",tensor_2.shape)
```

Creating a tensor from numpy array

```
array_1 = np.random.rand(3,4) # Create an array of the given shape and populate it with random samples from a uniform distribution over [0, 1)
tensor_3 = torch.tensor(array_1)
tensor_3
```

**Function 2: Torch.Randn**

torch.randn(*size, out=None, dtype=None, layout=torch.strided, device=None, requires_grad=False) → Tensor

torch.randn returns a tensor with randomly filled elements from a normal distribution with mean 0 & standard deviation 1 and the shape of the tensor determined by the size argument

```
#Example 1 - working
tensor_rand = torch.randn((6))
tensor_rand
## Output ##
tensor([-0.8254, -0.2660, -0.7612,  0.7048, -1.8596, -1.2513])
#Example 2 - working
tensor_rand1 = torch.randn((4,5))
tensor_rand1
## Output ##
tensor([[-0.7198,  0.2343, -1.1689, -1.9184, -0.8556],
        [ 0.5851,  0.9229, -0.2094,  0.0444,  0.3789],
        [-1.7424,  0.0966, -0.3040, -2.2399,  0.1730],
        [ 0.9268, -1.5848,  0.3625,  0.8362, -0.4173]])
```

The above examples returns the tensors & their shapes are matched with size argument 6 and all the elements are randomly picked from standard normal distribution. Also, check troch.rand function, which returns a tensor filled with random numbers from a uniform distribution on the interval [0,1)

**Function 3: Torch.Arange**
torch.arange(start=0, end, step=1, out=None, dtype=None, layout=torch.strided, device=None, requires_grad=False) → Tensor

torch.arange function returns a 1-D tensor with sequence of evenly spaced values within the given range [start & end). It requires atleast one argument i.e. end and the deafult value of the start & step arguments are 0 & 1 respectively

This function is similar to numpy.arange function

```
#Example 1 - working
torch.arange(10, dtype = torch.int64)
```

Returns a 1D tensor of 10 values with evenly spaced of step size 1 and all are integers. This function consider the end point as end- stepsize and so the end point in this example will be 9 (= 10 -1)

```
#Example 2 - working
torch.arange(start = 2, end = 30, step= 2.5, dtype = torch.int32)
```

Returns a 1D tensor of evenly spaced values starting from 2 to 30. Observed that the tensor elements are rounded, since the given data type is an integer and also noticed that the space between the consecutive elements doesn’t match with the given step size

#Example 3 - working
torch.arange(start = 2, end = 30, step= 2.5, dtype = torch.float32)

In this example the data type has changed to float and now noticed that the space between the consecutive elements were exactly matches with the given step size 2.5

**Function 4: Torch.Flatten**
torch.flatten(input, start_dim=0, end_dim=-1) → Tensor

This function helps to flattens the input(multiple dimensions) to a dimension tensor. It is a combination of torch.reshape & torch.squeeze functions.

It requires atleast one argument, i.e. a tensor. Start & end dimensions are optional & default values are 0 & -1 respectively


```
# Example 1 - working

input_tensor = torch.tensor([[4,5],[6,7],[8,9]])
print("Shape of the input tensor : ",input_tensor.shape)

flatten_it = torch.flatten(input_tensor)
print("Shape of the flatten tensor :",flatten_it.shape)
flatten_it
```

This example returns a input tensor of size (3,2) to a 1-D tensor of size (6), which is equal to number of elements in the input tensor

```
# Example 2 - working
input_tensor = torch.tensor([[[4,5,1],[6,7,8]],[[8,9,10],[1,1,8]]])
print("Shape of the input tensor : ",input_tensor.shape)

flatten_it1 = torch.flatten(input_tensor,start_dim = 1)
print("Shape of the flatten tensor :",flatten_it1.shape)
flatten_it1
```

First example shows that the whole input tensor flattened to a 1-D tensor, however, it is possible to flattens only specific parts of input tensor, which is shown in 2nd example.

Input tensor of size (2,2,3) flattens to a size of (2,6).

Function 5 — matrix multiplications — (torch.mm/mv)
torch.mm(input, mat2, out=None) → Tensor
torch.mv(input, vec, out=None) → Tensor

torch.mm - Performs a matrix multiplication of the two matrices and torch.mv - Performs a matrix-vector product of the matrix and vector

These functions does not do broadcasting


To perform matrix multiplication, the no. of. columns in matrix_1(input) should be equal to no. of. rows in matrix_2 (mat2).

![](https://miro.medium.com/max/1400/1*uzPriRLqmXyFBMtHM_i5uQ.png)

```
# Example 1 - working with torch.mm

matrix_1 = torch.randn(3,3)
matrix_2 = torch.ones(3,2)
result = torch.mm(matrix_1,matrix_2)
print(result.shape)
result
```

This example returns a tensor of size (3,2); matrix_1 is a (3 x 3) tensor & matrix_2 is a (3 x 2) tensor and the resultant matrix multiplication is a (3 x 2) tensor

```
# Example 2 - working with torch.mv

matrix = torch.randn(3,2)
vec = torch.randn(2)
result_mv = torch.mv(matrix,vec)
print(result_mv.shape)
result_mv
```

This example returns a tensor of size (3); matrix_1 is a (3 x 2) tensor & vec is a 1-D tensor of size 2 and the resultant matrix-vector multiplication is a 1-D tensor of size 3

**Function 6 — Torch.Argmax**
torch.argmax(input) → LongTensor

This function returns the indices of the maximum value of all elements in the input tensor. To get the indices of the minimum value, check torch.argmin() function

```
# Example 1 - working
t1 = torch.tensor([10,25,70,100,90])
torch.argmax(t1)
```

This example returns the indices of the maximum value of the input tensor. Maximum value of the input tensor is 100 & it’s index is 3

```
# Example 2 - working
t2 = torch.tensor([[3,5],[90,10]])
print(t2)
torch.argmax(t2,dim = 1) # If dim = None, the argmax of the flattened input is returned 
```

This example returns the indices of the maximum value of the input tensor along row axis and the output tensor is a 1-D tensor.

**Function 7 — Torch.Tensor.Item**
item() → number

Returns the value of the tensor as a standard Python number.This only works for tensors with one element. For other cases, see tolist().

```
# Example 1 - working
t1 = torch.tensor([100])
print(t1)
t1.item()
##Output##
tensor([100])
100
# Example 2 - working
t2 = torch.tensor([[99]])
print(t2)
t2.item()
##Output##
tensor([[99]])
99
```

In both the cases .item() returns a standard number from a given tensor input

**Conclusion**
We have discussed upon a few basic tensor functions with this, we can start messing around the tensors in PyTorch. For further exploration of these kind of functions on your own, visit the official PyTorch documentation. To learn more about Deep Learning with Pytorch, visit this site.

References:
* ![](https://jovian.ml/vineel369/pytorch-zero-to-gan-01-basic-tensor-operations)
* ![](https://pytorch.org/docs/stable/tensors.html)
* ![](https://deeplizard.com/learn/video/fCVuiW9AFzY)

I hope you enjoyed reading and learned something new. Eager to see some constructive feedback from you guys on my first blog post and also Let me know any interesting functions you were explored. Any questions, happy to help !!

