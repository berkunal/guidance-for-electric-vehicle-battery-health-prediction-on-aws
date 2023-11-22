/**
 * Copyright 2022 Amazon.com, Inc. and its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

export enum ErrorMessages {
    Err_200 = 'Selected pipeline not found. Please select a pipeline from the below list.',
    Err_400 = 'Invalid Pipeline. Please try again once the pipeline is finished processing.',
    Err_404 = 'No pipelines are available. Please select a pipeline from the below list.',
    Err_500 = 'Unable to retrieve pipeline details. Please try again later.'
}
